import { StateInterface, UseUiStateInterface } from '~/composables/useUiState/useUiState';

const state = reactive<StateInterface>({
  isCartSidebarOpen: false,
  isDashboardMobileMenuOpen: false,
  isMobileMenuOpen: false
});

/**
 * Global store for managing UI state.
 *
 * See the {@link UseUiStateInterface} for a list of methods and values available in this composable.
 */
export function useUiState(): UseUiStateInterface {


  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  };

  const toggleDashboardMobileMenu = () => {
    state.isDashboardMobileMenuOpen = !state.isDashboardMobileMenuOpen
  }


  return {
    isCartSidebarOpen: computed(() => state.isCartSidebarOpen),
    isDashboardMobileMenuOpen: computed(() => state.isDashboardMobileMenuOpen),
    isMobileMenuOpen: computed(() => state.isMobileMenuOpen),
    toggleCartSidebar,
    toggleMobileMenu,
    toggleDashboardMobileMenu
  };
}

export default useUiState;
export * from './useUiState';
