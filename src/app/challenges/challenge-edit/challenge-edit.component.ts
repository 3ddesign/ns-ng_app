import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallangeService } from '../challenge.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {
  isCreating: boolean;
  title = '';
  description = '';


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
        if (!this.isCreating) {
          this.challengeService.currentChallange.pipe(take(1)).subscribe(challange => {
            this.title = challange.title;
            this.description = challange.description;
          });
        }
      })

    });
  }
  onSubmit(title: string, description: string) {
    if (this.isCreating) {
      this.challengeService.createNewChallange(title, description);
    } else {
      this.challengeService.updateChallenge(title, description);
    }
    this.router.backToPreviousPage();
  }

}
