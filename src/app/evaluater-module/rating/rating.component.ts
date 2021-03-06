import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/storage/common.service';
import { Router } from '@angular/router';
import { RestApi } from '../../utils/services/rest-calls';
import { User } from '../../models/login/user/User';
import { Response } from '../../models/response/Response';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Statics } from '../../models/statics/statics';
import { RateSkills } from '../../models/ratings/RateSkills';
import { PeerRatings } from '../../models/ratings/PeerRatings';
import { Ratings } from '../../models/ratings/Ratings';
import { ToasterService } from 'angular2-toaster';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [NgbRatingConfig]
})
export class RatingComponent implements OnInit {
  users: User[];
  user: User;
  skills: Statics[];
  ratedSkills: RateSkills[];
  peerRatings: PeerRatings = {
    ratedBy:0,
    rated:[]
  };
  ratings:Ratings= {
    peerId:0,
    skills:[]
  };

  
  constructor(
    private storage: CommonService,
    private router: Router,
    private modalService: NgbModal,
    private rest: RestApi,
    private config: NgbRatingConfig,
    private message: ToasterService
    ) {
      debugger;
      if (this.storage.getToken() == undefined && this.storage.getToken() == null) {
        this.router.navigateByUrl('login');
      } else {
        this.rest.fetch('/users/details', null, 'get').subscribe((resp: Response) => {
          this.users = <User[]>resp.dataList;
          this.skills = this.storage.getSkills();
          this.ratedSkills = <RateSkills[]>this.skills;
          this.ratedSkills.forEach(element => {
            element.skill = element.staticId;
          });
          console.log(this.ratedSkills);
        });
      }
  }

  ngOnInit() {
  }

  open(modal, user: User): void{
    this.user = user;
    this.ratedSkills.forEach(element => {
      element.ratingProvided = 0;
      element.comment="";
    });
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  save(ratedSkills: RateSkills[], userId:number){
    //this.storage.setPeerRatings(ratedSkills, user);
    this.ratings = {
      peerId:0,
      skills:[]
    };
    this.ratings.peerId = userId;
    this.ratings.skills = ratedSkills;
    this.peerRatings.ratedBy = this.storage.getLoggedInUser().userId;
    this.peerRatings.rated.push(this.ratings);
    console.log(this.peerRatings);
  }

  rate(): void {
    this.rest.fetch('/peer/rate/save', this.peerRatings, 'post').subscribe((res:Response) => {
      console.log('rated');
      this.message.pop('success', 'Peer Review', res.message);
    })
  }
}
