<template>
  <v-skeleton-loader v-if="!projectDetail" type="heading"></v-skeleton-loader>
  <v-card v-else :title="projectDetail.name" :subtitle="projectDetail.description"></v-card>
  <v-tabs v-model="tab" align-tabs="left" color="primary" :disabled="!projectDetail">
    <v-tab value="settings"><v-icon icon="mdi-cog"></v-icon></v-tab>
    <v-tab value="requirements">Requirements</v-tab>
    <v-tab value="concept">Concept</v-tab>
    <v-tab value="design">Design</v-tab>
    <v-tab value="prototype">Prototype</v-tab>
    <v-tab value="validation">Validation</v-tab>
    <v-tab value="production">Production</v-tab>
    <v-tab value="documentation">Documentation</v-tab>
  </v-tabs>

  <v-skeleton-loader v-if="!projectDetail" type="paragraph"></v-skeleton-loader>
  <v-tabs-window v-else v-model="tab">
    <v-tabs-window-item value="settings">
      <v-text-field>Settings</v-text-field>
    </v-tabs-window-item>
    <v-tabs-window-item value="requirements">
      <v-text-field label="Project Name" v-model="projectDetail.name"></v-text-field>
      <v-textarea label="Project Description" v-model="projectDetail.description"></v-textarea>
      <v-textarea label="Project Stakeholders"
        hint="Who will be using the hardware and who has a stake in its performance and functionality?"
        v-model="projectDetail.stakeholders"></v-textarea>
      <v-textarea label="Project Requirements"
        hint="Functional and non-functional requirements including technical specifications, performance criteria, cost constraints, and regulatory compliance."
        v-model="projectDetail.requirements"></v-textarea>
      <v-btn @click="updateProject">
        Save Project Details
      </v-btn>
    </v-tabs-window-item>
    <v-tabs-window-item value="concept">
      <v-card title="Concepts" subtitle="Block diagrams, flowcharts, basic schematics...">
        <v-file-input label="Upload a new concept"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="Part Selection">
        <v-expansion-panels multiple>
          <v-expansion-panel v-for="part in parts" :key="part.name">
            <v-expansion-panel-title>{{ part.name }} - {{ part.selected }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row>
                <v-radio-group v-model="part.selected" inline color="primary">
                  <v-card v-for="option in part.options" :key="option.name">
                    <v-card-title>
                      <v-row>
                        <v-radio :label="option.name" :value="option.name"></v-radio>
                      </v-row>
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-list-item-title>Pros</v-list-item-title>
                          <v-list-item v-for="pro in option.pros" :key="pro">{{ pro }}</v-list-item>
                        </v-col>
                        <v-col>
                          <v-list-item-title>Cons</v-list-item-title>
                          <v-list-item v-for="con in option.cons" :key="con">{{ con }}</v-list-item>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-radio-group>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn @click="updateProjectParts">
          Generate Parts List
        </v-btn>
      </v-card>
    </v-tabs-window-item>
    <v-tabs-window-item value="design">
      <v-card title="Schematic Designs"
        subtitle="Detailed circuit schematics, including component selection and placement.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="Simulation"
        subtitle="Simulation tools to validate the design, identify potential issues, and optimize performance.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="PCB Layout"
        subtitle="PCB layout, remember to consider factors like signal integrity, thermal management, and manufacturability.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
    </v-tabs-window-item>
    <v-tabs-window-item value="prototype">
      <v-card title="Fabrication" subtitle="Prototypes based on the detailed design.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="Assembly"
        subtitle="Assembling the prototypes, including soldering components onto PCBs and integrating them into enclosures if applicable.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="Testing"
        subtitle="Testing of the prototypes to verify functionality, performance, and compliance with specifications.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
    </v-tabs-window-item>
    <v-tabs-window-item value="validation">
      <v-card title="Issues" subtitle="Identify and resolve any issues found during prototype testing.">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
      <v-card title="Compliance"
        subtitle="Ensuring the design meets all regulatory and industry standards (e.g., EMC, safety).">
        <v-file-input label="File input"></v-file-input>
        <v-card subtitle="User Uploads"></v-card>
        <v-card subtitle="AI Generated"></v-card>
      </v-card>
    </v-tabs-window-item>
    <v-tabs-window-item value="production">
      <TipTap content="<h4>Plan</h4><br><h4>Pre</h4><br><h4>Mass</h4><br><h4>Post</h4><br>" />
    </v-tabs-window-item>
    <v-tabs-window-item value="documentation">
      <v-expansion-panels multiple>
        <v-expansion-panel title="Schematics">
          <a href="/">Schematics.pdf</a>
        </v-expansion-panel>
        <v-expansion-panel title="PCB Layouts">
          <a href="/">PCB Layouts.pdf</a>
        </v-expansion-panel>
        <v-expansion-panel title="Bill of Materials">
          <a href="/">Bill of Materials.pdf</a>
        </v-expansion-panel>
        <v-expansion-panel title="Test Procedures">
          <a href="/">Test Procedures.pdf</a>
        </v-expansion-panel>
        <v-expansion-panel title="User Manuals">
          <a href="/">User Manuals.pdf</a>
        </v-expansion-panel>
        <v-expansion-panel title="Regulatory Documentation">
          <a href="/">Regulatory Dumentation.pdf</a>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<script>
import TipTap from '../components/TiptapInput.vue'
import apiService from '../apiService';

export default {
  name: "ProjectDetails",
  components: {
    TipTap
  },
  props: {
    id: {
      type: String
    }
  },
  data: () => ({
    tab: "requirements",
    projectDetail: null,
    parts: null
  }),
  created() {
    this.fetchProject();
  },
  watch: {
    '$route.params.id': function (id) {
      this.projectDetail = null;
      this.fetchProject(id);
    }
  },
  methods: {
    async fetchProject() {
      try {
        const response = await apiService.getProject(this.id);
        this.projectDetail = response.data;
        this.parts = this.projectDetail.parts;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async updateProject() {
      try {
        const response = await apiService.putProject(this.id, this.projectDetail);
        console.log('Project updated:', response.data);
      } catch (error) {
        console.error('Error creating project:', error);
      }
    },
    async updateProjectParts() {
      try {
        const response = await apiService.getProjectParts(this.id);
        this.parts = response.data.parts;
        console.log('Project parts updated:', response.data);
      } catch (error) {
        console.error('Error updating project parts:', error);
      }
    }
  },
}
</script>

<style>
.v-file-input {
  max-width: 350px;
}
</style>