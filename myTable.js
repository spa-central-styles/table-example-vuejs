
export const MyTable = {
  data() {
    return {
      items: [
          { id:'03/20/2020', charges: 1977.56, name:{first_name: 'Dickerson', last_name: 'Macdonald'}, payor:'United',  tin:1111111},
          { id:'03/21/2020', charges: 2977.56, adjusted:1546.12, name:{first_name: 'Larsen', last_name: 'Shaw'}, payor:'United', tin:1111111 },
          { id:'03/22/2020', charges: 1977.56, adjusted:2546.12, name:{first_name: 'Geneva', last_name: 'Wilson'}, payor:'United', tin:1111111 },
          { id:'03/23/2020', charges: 1977.56, adjusted:1546.12, name:{first_name: 'Jami', last_name: 'Carney'}, payor:'United', tin:1111111}
      ],
      fields: [
          {key: 'id', label:'ID'},          
          {key: 'name', label:'Patient'},
          {key: 'charges', label:'Billed Charges'},
          {key: 'payor', label:'Payor'},
          {key: 'tin', label:'Tin'},
      ],
    }
  },
  template: `
  <b-container class="table-bordered" style="border:0px;">
    <b-table 
      striped hover
      small
      :items="items"
      :fields="fields"
      >
      <template v-slot:cell(selected) = "row">
        <b-form-group>
          <input type="checkbox" />
        </b-form-group>
      </template>
    
    <template v-slot:cell(name) = "row">
      {{row.value.first_name}} {{row.value.last_name}}
    </template>
    </b-table>
    <template>
  <div>
    <b-button class="btn-success">Review and Accept</b-button>
    <b-link href="#foo" class="btn-link" style="margin-left:10px;">Reply with Comment</b-link>
    </div>
    </template>
  </b-container>
  
  `
}