<template>
  <div>

    <DashboardMobileSideNav/>
    
    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex min-h-0 flex-1 flex-col bg-gray-800">
        <DashboardSideNav />
      </div>
    </div>
    <div class="flex flex-col md:pl-64">

      <DashboardTopBar />

      <main class="flex-1">
          <div class="py-6">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <h1 class="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <!-- Replace with your content -->
              <div class="py-4">
                <slot />
              </div>
              <!-- /End replace -->
            </div>
          </div>
      </main>
    </div>
  </div>
</template>
