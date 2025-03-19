<script>
  import { onMount } from 'svelte';
  
  let email = '';
  let password = '';
  let loading = false;
  let errorMessage = '';
  let showMagicLinkOption = false;
  let magicLinkSent = false;
  let devMagicLink = '';
  
  const handleLogin = async () => {
    if (!email || !password) {
      errorMessage = 'Please enter both email and password';
      return;
    }
    
    loading = true;
    errorMessage = '';
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to login');
      }
      
      // Redirect to dashboard on successful login
      window.location.href = '/my/dashboard';
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = 'Failed to login. Please try again.';
      }
      loading = false;
    }
  };
  
  const handleMagicLink = async () => {
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
        throw new Error(result.error || 'Failed to send magic link');
      }
      
      // Show success message
      magicLinkSent = true;
      
      // For development, show the magic link
      if (result.devLink) {
        devMagicLink = result.devLink;
      }
      
      loading = false;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = 'Failed to send magic link. Please try again.';
      }
      loading = false;
    }
  };
  
  const toggleMagicLinkOption = () => {
    showMagicLinkOption = !showMagicLinkOption;
    errorMessage = '';
    magicLinkSent = false;
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
      Sign in to your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Malaysia Region
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

      {#if magicLinkSent}
        <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-green-700">
                Magic link has been sent to your email. Please check your inbox.
              </p>
              {#if devMagicLink}
                <p class="text-sm text-green-700 mt-2">
                  <strong>Development mode:</strong> <a href={devMagicLink} class="underline">Click here to login</a>
                </p>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      <form class="space-y-6" on:submit|preventDefault={showMagicLinkOption ? handleMagicLink : handleLogin}>
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

        {#if !showMagicLinkOption}
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                bind:value={password}
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="/my/auth/reset-password" class="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>
        {/if}

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
            {showMagicLinkOption ? 'Send Magic Link' : 'Sign in'}
          </button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div class="mt-6">
          <button 
            type="button" 
            on:click={toggleMagicLinkOption}
            class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            {showMagicLinkOption ? 'Use Password' : 'Use Magic Link'}
          </button>
        </div>

        <div class="mt-6">
          <p class="text-center text-sm text-gray-600">
            Don't have an account?
            <a href="/my/auth/register" class="font-medium text-primary-600 hover:text-primary-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
