import { Module, DynamicModule, Global, Provider } from '@nestjs/common';
import { TelegrafController } from './telegraf.controller';
import { TelegrafService } from './telegraf.service';

@Global()
@Module({})
export class TelegrafModule {
  static forRootAsync(options: any): DynamicModule {
    const asyncOptions = TelegrafModule.createAsyncOptionsProvider(options);

    return {
      module: TelegrafModule,
      imports: options.imports,
      providers: [TelegrafService, asyncOptions],
      exports: [TelegrafService],
      controllers: [TelegrafController],
    };
  }

  private static createAsyncOptionsProvider(options: any): Provider {
    return {
      provide: 'TELEGRAF_MODULE_OPTIONS',
      useFactory: async (...args) => {
        const config = await options.useFactory(...args);

        return config;
      },
      inject: options.inject || [],
    };
  }
}
