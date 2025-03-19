import { j as json } from "../../../../../chunks/index.js";
import { l as loginWithPassword } from "../../../../../chunks/auth.js";
const POST = async ({ request }) => {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return json({ success: false, error: "Email and password are required" }, { status: 400 });
    }
    const result = await loginWithPassword(email, password);
    if (!result.success) {
      return json({ success: false, error: result.error }, { status: 401 });
    }
    return json({
      success: true,
      user: {
        id: result.user?.id,
        email: result.user?.email,
        fullName: result.user?.fullName,
        role: result.user?.role,
        region: result.user?.region
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return json({ success: false, error: "An unexpected error occurred" }, { status: 500 });
  }
};
export {
  POST
};
