/**
 * Форматує число для відображення ціни
 * Використовує пробіл як роздільник тисяч для уникнення hydration mismatch
 */
export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
