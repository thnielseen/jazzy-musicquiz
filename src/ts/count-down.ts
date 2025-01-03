// Countdown

// Interface for the configuration
interface CountdownConfig {
  triggerElement: string | HTMLElement;             // Can pass either css selector or element itself
  textElement?: string | HTMLElement;               // Optional separate element for displaying text
  startText?: string;                               // Optional custom start text
  duration?: number;                                // Optional custom duration
}

class CountdownManager {
  private trigger: HTMLElement;
  private textElement: HTMLElement;
  private originalText: string;
  private countdownActive: boolean = false;
  private currentCount: number;
  private duration: number;

  // Helper method to check if an element is button-like
  private isButtonLike(element: HTMLElement): boolean {
    return (
      element instanceof HTMLButtonElement ||
      (element instanceof HTMLInputElement && 
       (element.type === 'button' || 
        element.type === 'submit' || 
        element.type === 'reset'))
    );
  }

  constructor(config: CountdownConfig) {
    // Get or validate the trigger element
    if (typeof config.triggerElement === 'string') {
      const element = document.querySelector(config.triggerElement);
      if (!element) {
        throw new Error(`No element found matching selector "${config.triggerElement}"`);
      }
      this.trigger = element as HTMLElement; // If trigger is given as a String
    } else {
      this.trigger = config.triggerElement; // If trigger is given as an Element
    }

    // Get or validate the text element (defaults to the trigger if not specified)
    if (config.textElement) {
      if (typeof config.textElement === 'string') {
        const element = document.querySelector(config.textElement);
        if (!element) {
          throw new Error(`No text element found matching selector "${config.textElement}"`);
        }
        this.textElement = element as HTMLElement;
      } else {
        this.textElement = config.textElement;
      }
    } else {
      // If no text element is specified in the config
      if (this.trigger instanceof HTMLInputElement) { // If trigger is an Input element
        // Crete a span only if no text element is specified

      }
    }

    
  }


}