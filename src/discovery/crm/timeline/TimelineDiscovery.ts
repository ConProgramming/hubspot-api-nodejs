import { createConfiguration } from '../../../../codegen/crm/timeline/configuration'
import {
  EventsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TemplatesApi,
  TokensApi,
} from '../../../../codegen/crm/timeline/index'
import { Observable } from '../../../../codegen/crm/timeline/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'

export default class TimelineDiscovery {
  public eventsApi: EventsApi
  public templatesApi: TemplatesApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.eventsApi = new EventsApi(configuration)
    this.templatesApi = new TemplatesApi(configuration)
    this.tokensApi = new TokensApi(configuration)
  }
}
