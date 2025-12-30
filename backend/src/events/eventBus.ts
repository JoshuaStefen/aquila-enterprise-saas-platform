type EventHandler = (payload: any) => void;

class EventBus {
  private handlers: Record<string, EventHandler[]> = {};

  on(event: string, handler: EventHandler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  emit(event: string, payload: any) {
    (this.handlers[event] || []).forEach(h => h(payload));
  }
}

export const eventBus = new EventBus();
