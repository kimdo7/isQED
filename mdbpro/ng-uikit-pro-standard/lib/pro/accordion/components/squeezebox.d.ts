import { QueryList, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
export declare class SqueezeBoxComponent implements OnInit, AfterContentInit, OnDestroy {
    private accordionService;
    private itemsChanges;
    multiple: boolean;
    private _multiple;
    items: QueryList<SBItemComponent>;
    constructor(accordionService: MdbAccordionService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
