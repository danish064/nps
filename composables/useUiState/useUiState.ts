import { ComputedRef } from "nuxt/dist/app/compat/capi";


export interface StateInterface {
  isCartSidebarOpen: boolean;
  isDashboardMobileMenuOpen: boolean;
  isMobileMenuOpen: boolean;
}

/**
 * Data and methods returned from the {@link useUiState|useUiState()} composable
 */
export interface UseUiStateInterface {

  /**
   * Indicates whether the cart sidebar is open
   */
  isCartSidebarOpen: ComputedRef<boolean>;

  /**
   * Indicates whether the dashboard mobile menu
   */
  isDashboardMobileMenuOpen: ComputedRef<boolean>;

  /**
   * Indicates whether the header mobile menu is open
   */
  isMobileMenuOpen: ComputedRef<boolean>;

  /**
   * Toggles the visibility of the header mobile menu
   */
  toggleMobileMenu(): void;

  /**
   * Toggles the visibility of the dashboard mobile menu
   */
   toggleDashboardMobileMenu(): void;
  
  /**
   * Toggles the visibility of the cart modal
   */
  toggleCartSidebar(): void;
}
