import { CategoryPipe } from './category.pipe';
@Component({      
  selector: 'app-category',
  templateUrl: '../grid/grid.component',
  pipes: [CategoryPipe]   // This Line       
})