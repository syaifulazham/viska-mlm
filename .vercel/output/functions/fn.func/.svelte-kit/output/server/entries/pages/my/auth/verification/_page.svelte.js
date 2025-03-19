import { f as attr, c as pop, p as push } from "../../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let loading = false;
  $$payload.out += `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="flex justify-center"><h1 class="text-3xl font-bold text-primary-700">Fefet</h1></div> <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Email Verification</h2> <p class="mt-2 text-center text-sm text-gray-600">We need to verify your email address</p></div> <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<form class="space-y-6"><div><label for="email" class="block text-sm font-medium text-gray-700">Email address</label> <div class="mt-1"><input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", email)}></div></div> <div><button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"${attr("disabled", loading, true)}>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> Send Verification Email</button></div></form>`;
  }
  $$payload.out += `<!--]--> <div class="mt-6"><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div> <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">Or</span></div></div> <div class="mt-6 text-center"><a href="/my/auth/login" class="font-medium text-primary-600 hover:text-primary-500">Return to Login</a></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
