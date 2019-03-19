import { NgModule } from "@angular/core";
import { MatButtonModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatCardModule, MatExpansionModule, MatIconModule, MatRippleModule, MatDialogModule, MatBottomSheetModule, MatTreeModule, MatProgressBarModule, MatNativeDateModule } from "@angular/material"
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatIconModule,
        MatRippleModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatTreeModule,
        MatProgressBarModule,

        // BrowserModule,
        // BrowserAnimationsModule,
        // FormsModule,
        // HttpClientModule,
        // MatNativeDateModule,
        // ReactiveFormsModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatIconModule,
        MatRippleModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatTreeModule,
        MatProgressBarModule,

        // BrowserModule,
        // BrowserAnimationsModule,
        // FormsModule,
        // HttpClientModule,
        // MatNativeDateModule,
        // ReactiveFormsModule
    ]
})

export class MaterialModule {

}