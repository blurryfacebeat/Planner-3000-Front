class Dashboard {
  private static instance: Dashboard;
  private root = '/me';
  HOME = this.root;
  TASKS = `${this.root}/tasks`;
  HABITS = `${this.root}/habits`;
  TIMER = `${this.root}/timer`;
  TIMER_BLOCKING = `${this.root}/timer-blocking`;
  SETTINGS = `${this.root}/settings`;

  private constructor() {}

  static getInstance(): Dashboard {
    if (!Dashboard.instance) {
      Dashboard.instance = new Dashboard();
    }

    return Dashboard.instance;
  }
}

export const DASHBOARD_PAGES = Dashboard.getInstance();
