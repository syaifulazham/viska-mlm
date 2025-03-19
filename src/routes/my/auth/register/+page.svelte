<script>
  import { onMount } from 'svelte';
  
  let formData = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    agreeTerms: false
  };
  
  let loading = false;
  let errorMessage = '';
  let currentStep = 1;
  let totalSteps = 3;
  
  const validateStep1 = () => {
    if (!formData.fullName) {
      errorMessage = 'Please enter your full name';
      return false;
    }
    if (!formData.email) {
      errorMessage = 'Please enter your email address';
      return false;
    }
    if (!formData.phone) {
      errorMessage = 'Please enter your phone number';
      return false;
    }
    return true;
  };
  
  const validateStep2 = () => {
    if (!formData.password) {
      errorMessage = 'Please enter a password';
      return false;
    }
    if (formData.password.length < 8) {
      errorMessage = 'Password must be at least 8 characters long';
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      errorMessage = 'Passwords do not match';
      return false;
    }
    return true;
  };
  
  const validateStep3 = () => {
    if (!formData.agreeTerms) {
      errorMessage = 'You must agree to the terms and conditions';
      return false;
    }
    return true;
  };
  
  const nextStep = () => {
    errorMessage = '';
    
    if (currentStep === 1 && validateStep1()) {
      currentStep = 2;
    } else if (currentStep === 2 && validateStep2()) {
      currentStep = 3;
    }
  };
  
  const prevStep = () => {
    errorMessage = '';
    if (currentStep > 1) {
      currentStep--;
    }
  };
  
  const handleSubmit = async () => {
    errorMessage = '';
    
    if (!validateStep3()) {
      return;
    }
    
    loading = true;
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          referralCode: formData.referralCode,
          region: 'Malaysia'
        })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to register');
      }
      
      // Redirect to verification page
      window.location.href = '/my/auth/verification';
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = 'Failed to register. Please try again.';
      }
      loading = false;
    }
  };
</script>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold text-primary-700">
        <img src="/images/fefet-logo.png" alt="Fefet" class="w-12 h-12" />
      </h1>
    </div>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Create your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Malaysia Region
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <!-- Progress Steps -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          {#each Array(totalSteps) as _, i}
            <div class="flex flex-col items-center">
              <div class={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${i + 1 <= currentStep ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300 text-gray-500'}`}>
                {i + 1}
              </div>
              <div class="text-xs mt-1 text-gray-500">
                {i === 0 ? 'Personal Info' : i === 1 ? 'Security' : 'Confirmation'}
              </div>
            </div>
            
            {#if i < totalSteps - 1}
              <div class={`flex-1 h-1 ${i + 1 < currentStep ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
            {/if}
          {/each}
        </div>
      </div>

      {#if errorMessage}
        <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                {errorMessage}
              </p>
            </div>
          </div>
        </div>
      {/if}

      <form on:submit|preventDefault={currentStep === totalSteps ? handleSubmit : nextStep}>
        <!-- Step 1: Personal Information -->
        {#if currentStep === 1}
          <div class="space-y-6">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div class="mt-1">
                <input id="fullName" name="fullName" type="text" required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.fullName}
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.email}
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div class="mt-1">
                <input id="phone" name="phone" type="tel" required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.phone}
                />
              </div>
            </div>

            <div>
              <label for="referralCode" class="block text-sm font-medium text-gray-700">
                Referral Code (Optional)
              </label>
              <div class="mt-1">
                <input id="referralCode" name="referralCode" type="text"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.referralCode}
                />
              </div>
            </div>
          </div>
        {/if}

        <!-- Step 2: Security -->
        {#if currentStep === 2}
          <div class="space-y-6">
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input id="password" name="password" type="password" required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.password}
                />
              </div>
              <p class="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters long and include a mix of letters, numbers, and special characters.
              </p>
            </div>

            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div class="mt-1">
                <input id="confirmPassword" name="confirmPassword" type="password" required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  bind:value={formData.confirmPassword}
                />
              </div>
            </div>
          </div>
        {/if}

        <!-- Step 3: Confirmation -->
        {#if currentStep === 3}
          <div class="space-y-6">
            <div class="bg-gray-50 p-4 rounded-md">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Review Your Information</h3>
              
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="text-gray-500">Full Name:</div>
                <div>{formData.fullName}</div>
                
                <div class="text-gray-500">Email:</div>
                <div>{formData.email}</div>
                
                <div class="text-gray-500">Phone:</div>
                <div>{formData.phone}</div>
                
                <div class="text-gray-500">Referral Code:</div>
                <div>{formData.referralCode || 'None'}</div>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="agreeTerms" name="agreeTerms" type="checkbox"
                  class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  bind:checked={formData.agreeTerms}
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="agreeTerms" class="font-medium text-gray-700">
                  I agree to the <a href="/my/terms" class="text-primary-600 hover:text-primary-500">Terms and Conditions</a> and <a href="/my/privacy" class="text-primary-600 hover:text-primary-500">Privacy Policy</a>
                </label>
              </div>
            </div>
          </div>
        {/if}

        <div class="mt-6 flex items-center justify-between">
          {#if currentStep > 1}
            <button type="button"
              class="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              on:click={prevStep}
            >
              Back
            </button>
          {:else}
            <div></div>
          {/if}

          <button type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            disabled={loading}
          >
            {#if loading}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            {/if}
            {currentStep === totalSteps ? 'Create Account' : 'Next'}
          </button>
        </div>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Already have an account?
          <a href="/my/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
