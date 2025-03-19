import { j as json } from "../../../../../chunks/index.js";
import { v as verifyMagicLink } from "../../../../../chunks/auth.js";
const GET = async ({ url }) => {
  try {
    const token = url.searchParams.get("token");
    if (!token) {
      return json({ success: false, error: "Token is required" }, { status: 400 });
    }
    const result = await verifyMagicLink(token);
    if (!result.success) {
      return json({ success: false, error: result.error }, { status: 401 });
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/my/dashboard?auth=${result.temporaryToken}`
      }
    });
  } catch (error) {
    console.error("Verification error:", error);
    return json({ success: false, error: "An unexpected error occurred" }, { status: 500 });
  }
};
export {
  GET
};
