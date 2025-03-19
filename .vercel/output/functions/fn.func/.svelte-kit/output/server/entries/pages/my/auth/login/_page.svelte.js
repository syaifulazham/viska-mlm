import { f as attr, e as escape_html, c as pop, p as push } from "../../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let loading = false;
  $$payload.out += `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="flex justify-center"><h1 class="text-3xl font-bold text-primary-700"><img src="/images/fefet-logo.png" alt="Fefet" class="w-12 h-12"></h1></div> <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2> <p class="mt-2 text-center text-sm text-gray-600">Malaysia Region</p></div> <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form class="space-y-6"><div><label for="email" class="block text-sm font-medium text-gray-700">Email address</label> <div class="mt-1"><input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", email)}></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><label for="password" class="block text-sm font-medium text-gray-700">Password</label> <div class="mt-1"><input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", password)}></div></div> <div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"> <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label></div> <div class="text-sm"><a href="/my/auth/reset-password" class="font-medium text-primary-600 hover:text-primary-500">Forgot your password?</a></div></div>`;
  }
  $$payload.out += `<!--]--> <div><button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"${attr("disabled", loading, true)}>`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> ${escape_html("Sign in")}</button></div></form> <div class="mt-6"><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div> <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">Or continue with</span></div></div> <div class="mt-6"><button type="button" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">${escape_html("Use Magic Link")}</button></div> <div class="mt-6"><p class="text-center text-sm text-gray-600">Don't have an account? <a href="/my/auth/register" class="font-medium text-primary-600 hover:text-primary-500">Sign up</a></p></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
