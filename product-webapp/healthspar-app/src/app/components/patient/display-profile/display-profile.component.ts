import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

/**
 *
 * Make sure you have jQuery installed and properly configured
 * in your Angular project for this code to work.
 *

      "npm install jquery --save"

 *
 * And include it in the angular.json file under the "scripts" section:
 *

      "scripts": [
        "node_modules/jquery/dist/jquery.min.js"
      ],

**/

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  ngOnInit() {
    const trigger = $('.hamburger');
    const overlay = $('.overlay');
    let isClosed = false;

    trigger.click(() => {
      hamburger_cross();
    });

    function hamburger_cross() {
      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    $('[data-toggle="offcanvas"]').click(() => {
      $('#wrapper').toggleClass('toggled');
    });
  }
}
