export const Helpers = {
  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};
