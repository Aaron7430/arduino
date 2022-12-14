import { injectable } from '@theia/core/shared/inversify';
import { FrontendApplication } from '@theia/core/lib/browser';
import { BrowserMenuBarContribution } from '@theia/core/lib/browser/menu/browser-menu-plugin';

@injectable()
export class ArduinoMenuContribution extends BrowserMenuBarContribution {
  override onStart(app: FrontendApplication): void {
    const menu = this.factory.createMenuBar();
    app.shell.addWidget(menu, { area: 'top' });
  }
}
