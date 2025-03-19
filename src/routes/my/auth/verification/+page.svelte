<script lang="ts">
  import { onMount } from 'svelte';
  
  let email = '';
  let verificationSent = false;
  let loading = false;
  let errorMessage = '';
  let successMessage = '';
  let devLink = ''; // Store the dev link here instead of on window
  
  onMount(() => {
    // Check if we have an email in session storage (from registration)
    const storedEmail = sessionStorage.getItem('pendingVerificationEmail');
    if (storedEmail) {
      email = storedEmail;
      verificationSent = true;
    }
  });
  
  const sendVerification = async () => {
    if (!email) {
      errorMessage = 'Please enter your email address';
      return;
    }
    
    loading = true;
    errorMessage = '';
    
    try {
      const response = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send verification email');
      }
      
      // Store email in session storage
      sessionStorage.setItem('pendingVerificationEmail', email);
      
      // Show success message
      verificationSent = true;
      successMessage = 'Verification email sent! Please check your inbox.';
      
      // For development, show the magic link
      if (result.devLink) {
        devLink = result.devLink;
        successMessage += ' (Dev mode: Check console for magic link)';
        console.log('Magic Link:', result.devLink);
      }
      
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = 'Failed to send verification email. Please try again.';
      }
    } finally {
      loading = false;
    }
  };
  
  const resendVerification = () => {
    sendVerification();
  };
</script>

<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="flex justify-center">
      <h1 class="text-3xl font-bold text-primary-700">Fefet</h1>
    </div>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Email Verification
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      We need to verify your email address
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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

      {#if successMessage}
        <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-green-700">
                {successMessage}
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#if verificationSent}
        <div class="text-center">
          <div class="rounded-md bg-blue-50 p-4 mb-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3 flex-1 md:flex md:justify-between">
                <p class="text-sm text-blue-700">
                  We've sent a verification link to <strong>{email}</strong>. Please check your inbox and click the link to verify your email address.
                </p>
              </div>
            </div>
          </div>
          
          <p class="text-sm text-gray-600 mb-4">
            Didn't receive the email? Check your spam folder or try again.
          </p>
          
          <button
            type="button"
            on:click={resendVerification}
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            disabled={loading}
          >
            {#if loading}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            {/if}
            Resend Verification Email
          </button>
        </div>
      {:else}
        <form on:submit|preventDefault={sendVerification} class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                bind:value={email}
              />
            </div>
          </div>

          <div>
            <button type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              disabled={loading}
            >
              {#if loading}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              {/if}
              Send Verification Email
            </button>
          </div>
        </form>
      {/if}

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Or
            </span>
          </div>
        </div>

        <div class="mt-6 text-center">
          <a href="/my/auth/login" class="font-medium text-primary-600 hover:text-primary-500">
            Return to Login
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
