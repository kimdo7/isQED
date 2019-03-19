import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface AwardNode {
    name: string;
    children?: AwardNode[];
}


const TREE_DATA: AwardNode[] = [
    {
        name: 'ISQED Quality Award (IQ-Award)',
        children: [
            { name: '402306670' },
        ]
    },
    {
        name: 'ISQED Education Leadership Award',
        children: [
            { name: '402306671' },
        ]
    },
    {
        name: 'ISQED Quality Educator Award',
        children: [
            { name: '402306671' },
        ]
    },
    {
        name: 'ISQED Fellow Award',
        children: [
            { name: '402306669' },
        ]
    },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

@Component({
    selector: 'app-awards-home',
    templateUrl: './awards-home.component.html',
    styleUrls: ['./awards-home.component.css']
})
export class AwardsHomeComponent implements OnInit {

    private transformer = (node: AwardNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    }

    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);

    treeFlattener = new MatTreeFlattener(
        this.transformer, node => node.level, node => node.expandable, node => node.children);

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    ngOnInit() {
    }

}
