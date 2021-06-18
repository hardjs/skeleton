import router from '../config/routes';
import { Kernel as BaseKernel } from '@hardjs/core';

export class Kernel extends BaseKernel {
    public constructor() {
        super();
    }

    public initializeKernel() {
        this.container.set('kernel', this);
    }

    public async loadRoute(controllers: Map<string, any>) {
        await router(this.app, controllers);
    }
}
