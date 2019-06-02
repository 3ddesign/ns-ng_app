import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallangeService } from '../challenge.service';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {
  isCreating: boolean;


  constructor(private pageRoute: PageRoute,
     private router: RouterExtensions,
     private challengeService: ChallangeService) {

  }

  ngOnInit() {
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('mode')) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get('mode') !== 'edit';
        }
        console.log(paramMap.get('mode'));
      })

    });
  }
  onSubmit(title: string, description: string) {
    this.challengeService.createNewChallange(title, description);
    this.router.backToPreviousPage();
  }

}
