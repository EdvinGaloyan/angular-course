import {Component, OnInit} from '@angular/core';
import {Colors} from "./Color";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.carSelect("BMW");
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(text: string) {
    if (text === 'Audi') {
      this.name = "Audi";
      this.speed = 220;
      this.model = "A6";
      this.colors = {
        car: "white",
        salon: "black",
        wheels: "silver"
      };
      this.options = ["ABS", "AUTOPILOT"]
    } else if (text === "BMW") {
      this.name = "BMW";
      this.speed = 260;
      this.model = "M60";
      this.colors = {
        car: "Black",
        salon: "Black",
        wheels: "White"
      };
      this.options = ["ABS", "AUTOPILOT", "AUTO-PARKING"]
    } else {
      this.name = "Mercedes";
      this.speed = 240;
      this.model = "E600";
      this.colors = {
        car: "Silver",
        salon: "White",
        wheels: "Black"
      };
      this.options = ["ABS", "AUTOPILOT", "AUTO-PARKING"];
    }
  }

  addOption(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(option: any) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }
}


