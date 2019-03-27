import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-learning-course',
    templateUrl: './learning-course.component.html',
    styleUrls: ['./learning-course.component.css']
})
export class LearningCourseComponent implements OnInit {
    title = 'AngularMaterialGettingStarted';

    isMenuOpen = true;
    contentMargin = 240;

    task: string[] = [
        'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
    ]

    onToolbarMenuToggle() {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;

        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        } else {
            this.contentMargin = 240;
        }
    }
    constructor() { }

    ngOnInit() {
    }

}
