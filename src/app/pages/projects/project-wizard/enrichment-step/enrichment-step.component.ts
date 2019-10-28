import { Component, ViewChild } from '@angular/core';
import { HPacket, Rule, RulesService } from '@hyperiot/core';
import { ProjectWizardService } from 'src/app/services/projectWizard/project-wizard.service';
import { PacketEnrichmentFormComponent } from '../../project-forms/packet-enrichment-form/packet-enrichment-form.component';
import { PacketSelectComponent } from '../packet-select/packet-select.component';
import { PageStatusEnum } from '../model/pageStatusEnum';
import { ProjectWizardHttpErrorHandlerService } from 'src/app/services/errorHandler/project-wizard-http-error-handler.service';

@Component({
  selector: 'hyt-enrichment-step',
  templateUrl: './enrichment-step.component.html',
  styleUrls: ['./enrichment-step.component.scss']
})
export class EnrichmentStepComponent {

  @ViewChild('form', { static: false }) form: PacketEnrichmentFormComponent;
  @ViewChild('packetSelect', { static: false }) packetSelect: PacketSelectComponent;

  selectedRule: Rule;

  constructor(
    private rulesService: RulesService,
    private wizardService: ProjectWizardService,
    private errorHandler: ProjectWizardHttpErrorHandlerService
  ) { }

  currentPacket: HPacket;

  packetChanged(event) {
    this.currentPacket = event;
  }

  saveRule() {

    

  }

  updateRule() {

    this.form.pageStatus = PageStatusEnum.Loading;

    var jActions = [this.form.form.value['enrichmentRule']];
    var jActionStr: string = JSON.stringify(jActions);

    let rule: Rule = {
      id: this.selectedRule.id,
      entityVersion: this.selectedRule.entityVersion,
      name: this.form.form.value['rule-name'],
      ruleDefinition: this.form.ruleDefinitionComponent.buildRuleDefinition(),
      description: this.form.form.value['rule-description'],
      jsonActions: jActionStr
    }

    this.rulesService.updateRule(rule).subscribe(
      res => {
        //this.form.resetForm('ADD');
        this.form.resetForm();
        this.packetSelect.autoSelect();
        this.form.pageStatus = PageStatusEnum.Submitted;
        this.wizardService.updateEnrichmentRule(res);
      },
      err => {
        this.form.pageStatus = PageStatusEnum.Error;
        this.form.errors = this.errorHandler.handleCreateRule(err);
        this.form.errors.forEach(e => {
          if (e.container != 'general')
            this.form.form.get(e.container).setErrors({
              validateInjectedError: {
                valid: false
              }
            });
        })
      }
    )
  }

  tableUpdateRule(rule: Rule) {
    this.selectedRule = rule;
    this.packetSelect.setPacket(rule.packet);
    this.packetSelect.freezeSelection();
    this.currentPacket = rule.packet;
    this.form.setForm(rule);
  }

  tableCopyRule(rule: Rule) {
    this.packetSelect.setPacket(rule.packet);
    this.currentPacket = rule.packet;
    this.form.setForm(rule);
  }

  //delete logic

  deleteModal: boolean = false;

  deleteError: string = null;

  showDeleteModal(rule: Rule) {
    this.deleteError = null;
    this.selectedRule = rule;
    this.deleteModal = true;
  }

  hideDeleteModal() {
    this.deleteModal = false;
    this.selectedRule = null;
  }

  deleteRule() {
    this.deleteError = null;
    this.rulesService.deleteRule(this.selectedRule.id).subscribe(
      res => {
        //this.form.resetForm('ADD');
        this.form.resetForm();
        this.packetSelect.autoSelect();
        this.wizardService.deleteEnrichmentRule(this.selectedRule.id);
        this.hideDeleteModal();
      },
      err => {
        this.deleteError = "Error executing your request";
      }
    );
  }

}
