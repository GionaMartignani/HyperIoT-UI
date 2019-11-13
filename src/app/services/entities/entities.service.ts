import { Injectable } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';

interface Entity {
  readonly id: number;
  readonly entityName: string;
  // readonly displayName: string;
  readonly displayListName: string;
  // readonly pluralName: string;
  readonly formTitle: string;
  readonly shortDefinition: string;
  readonly definition: string;
  readonly longDefinition: string;
  readonly icon: string;
  readonly iconPlus: string;
}

/**
 * EntitiesService is a service used to provide and configure usefull information about the following entities:
 * Project, Device, Packet, field, Enrichment, Statistic, Event.
 */
@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  /**
   * class constructor
   */
  constructor(
    private i18n: I18n
  ) { }

  /**
   * information about Project
   */
  public readonly project: Entity = {
    id: 0,
    entityName: 'project',
    // displayName: 'Project',
    displayListName: this.i18n('HYT_project_displaylistname'),
    // pluralName: 'Projects',
    formTitle: this.i18n('HYT_project_form_title'),
    shortDefinition: this.i18n('HYT_project_short_definition'),
    definition: this.i18n('HYT_project_definition'),
    longDefinition: this.i18n('HYT_project_long_definition'),
    icon: 'icon-hyt_projects',
    iconPlus: 'icon-hyt_projectsPlus'
  };

  /**
   * information about Device
   */
  public readonly device: Entity = {
    id: 0,
    entityName: 'device',
    // displayName: 'Device',
    displayListName: this.i18n('HYT_device_displaylistname'),
    // pluralName: 'Devices',
    formTitle: this.i18n('HYT_device_form_title'),
    shortDefinition: this.i18n('HYT_device_shotrt_definition'),
    definition: this.i18n('HYT_device_definition'),
    longDefinition: this.i18n('HYT_device_long_definition'),
    icon: 'icon-hyt_device',
    iconPlus: 'icon-hyt_devicePlus'
  };

  /**
   * information about packet
   */
  public readonly packet: Entity = {
    id: 0,
    entityName: 'packet',
    // displayName: 'Packet',
    displayListName: this.i18n('HYT_packet_displaylistname'),
    // pluralName: 'Packets',
    formTitle: this.i18n('HYT_packet_form_title'),
    shortDefinition: this.i18n('HYT_packet_short_definition'),
    definition: this.i18n('HYT_packet_definition'),
    longDefinition: this.i18n('HYT_packet_long_definition'),
    icon: 'icon-hyt_packets',
    iconPlus: 'icon-hyt_packetsPlus'
  };

  /**
   * information about field
   */
  public readonly field: Entity = {
    id: 0,
    entityName: 'field',
    // displayName: 'Field',
    displayListName: this.i18n('HYT_field_displaylistname'),
    // pluralName: 'Fields',
    formTitle: this.i18n('HYT_field_form_title'),
    shortDefinition: this.i18n('HYT_fields_short_definition'),
    definition: this.i18n('HYT_fields_definition'),
    longDefinition: this.i18n('HYT_fields_long_definition'),
    icon: 'icon-hyt_fields',
    iconPlus: 'icon-hyt_fieldsPlus'
  };

  /**
   * information about enrichment
   */
  public readonly enrichment: Entity = {
    id: 0,
    entityName: 'enrichment',
    // displayName: 'Enrichment',
    displayListName: this.i18n('HYT_enrichment_displaylistname'),
    // pluralName: 'Enrichment',
    formTitle: this.i18n('HYT_enrichment_form_title'),
    shortDefinition: this.i18n('HYT_enrichment_short_definition'),
    definition: this.i18n('HYT_enrichment_definition'),
    longDefinition: this.i18n('HYT_enrichment_long_definition'),
    icon: 'icon-hyt_enrichments',
    iconPlus: 'icon-hyt_enrichmentsPlus'
  };

  /**
   * information about statistic
   */
  public readonly statistic: Entity = {
    id: 0,
    entityName: 'statistic',
    // displayName: 'Statistic',
    displayListName: this.i18n('HYT_statistic_displaylistname'),
    // pluralName: 'Statistics',
    formTitle: this.i18n('HYT_statistic_form_title'),
    shortDefinition: this.i18n('HYT_statistics_short_definition'),
    definition: this.i18n('HYT_statistics_definition'),
    longDefinition: this.i18n('HYT_statistics_long_definition'),
    icon: 'icon-hyt_statistics',
    iconPlus: 'icon-hyt_statisticsPlus'
  };

  /**
   * information about event
   */
  public readonly event: Entity = {
    id: 0,
    entityName: 'event',
    // displayName: 'Event',
    displayListName: this.i18n('HYT_event_displaylistname'),
    // pluralName: 'Events',
    formTitle: this.i18n('HYT_event_form_title'),
    shortDefinition: this.i18n('HYT_events_short_definition'),
    definition: this.i18n('HYT_events_definition'),
    longDefinition: this.i18n('HYT_events_long_definition'),
    icon: 'icon-hyt_event',
    iconPlus: 'icon-hyt_eventPlus'
  };

}