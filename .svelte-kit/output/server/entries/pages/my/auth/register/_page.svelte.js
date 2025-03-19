import { h as ensure_array_like, i as attr_class, e as escape_html, f as attr, c as pop, p as push } from "../../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let formData = {
    fullName: "",
    email: "",
    phone: "",
    referralCode: ""
  };
  let loading = false;
  let currentStep = 1;
  let totalSteps = 3;
  const each_array = ensure_array_like(Array(totalSteps));
  $$payload.out += `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="flex justify-center"><h1 class="text-3xl font-bold text-primary-700"><img src="/images/fefet-logo.png" alt="Fefet" class="w-12 h-12"></h1></div> <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2> <p class="mt-2 text-center text-sm text-gray-600">Malaysia Region</p></div> <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"><div class="mb-8"><div class="flex items-center justify-between"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="flex flex-col items-center"><div${attr_class(`w-8 h-8 flex items-center justify-center rounded-full border-2 ${i + 1 <= currentStep ? "border-primary-600 bg-primary-600 text-white" : "border-gray-300 text-gray-500"}`)}>${escape_html(i + 1)}</div> <div class="text-xs mt-1 text-gray-500">${escape_html(i === 0 ? "Personal Info" : i === 1 ? "Security" : "Confirmation")}</div></div> `;
    if (i < totalSteps - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(`flex-1 h-1 ${i + 1 < currentStep ? "bg-primary-600" : "bg-gray-300"}`)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form>`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="space-y-6"><div><label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label> <div class="mt-1"><input id="fullName" name="fullName" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", formData.fullName)}></div></div> <div><label for="email" class="block text-sm font-medium text-gray-700">Email address</label> <div class="mt-1"><input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", formData.email)}></div></div> <div><label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label> <div class="mt-1"><input id="phone" name="phone" type="tel" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", formData.phone)}></div></div> <div><label for="referralCode" class="block text-sm font-medium text-gray-700">Referral Code (Optional)</label> <div class="mt-1"><input id="referralCode" name="referralCode" type="text" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"${attr("value", formData.referralCode)}></div></div></div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-6 flex items-center justify-between">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div></div>`;
  }
  $$payload.out += `<!--]--> <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"${attr("disabled", loading, true)}>`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> ${escape_html("Next")}</button></div></form> <div class="mt-6 text-center"><p class="text-sm text-gray-600">Already have an account? <a href="/my/auth/login" class="font-medium text-primary-600 hover:text-primary-500">Sign in</a></p></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
