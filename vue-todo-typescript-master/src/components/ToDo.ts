import { Component, Vue } from 'vue-property-decorator';
import WithRender from './to-do.html';
import ToDoForm from './ToDoForm';
import Task from '@/types/Task';

@WithRender
@Component({
  components: {
    'to-do-form': ToDoForm,
  },
})
export default class ToDo extends Vue {
  public tasks: Task[] = [
    { description: 'Make Coffee', completed: false },
      { description: 'Feed Dragons', completed: false },
  ];
  public text1: string = ''
  public name: string = ''
  //public text: string = ' C'

  public addTask(description: string): void {
      this.tasks.push({ description, completed: false });
  }
  // created(){
    
  // }
  public created() {
    this.text1 = 'sdfsd';
    // console.log('Hi there');
  }
  public mounted() {
    // console.log('I am mounted');
    this.text1 = 'No';
  }
  public onSubmit(text: string): void {
    text = 'Vhjd';
    this.text1 = this.name + text;
  }
}
