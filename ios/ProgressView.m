//
//  ProgressView.m
//  BakeSaleapp
//
//  Created by Lavanya on 03/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "ProgressView.h"

@implementation ProgressView

MBProgressHUD *progressHUD;


RCT_EXPORT_METHOD(showImage)
{
  // Here's our method's code
  //  RCTLogInfo(@"showImage called!");
  NSLog(@"showImage called");
}

RCT_EXPORT_METHOD(showHud:(UIView *)view)
{
  
  progressHUD=[MBProgressHUD showHUDAddedTo:view animated:YES];
  progressHUD.mode=MBProgressHUDModeIndeterminate;
  progressHUD.label.text=@"loading";
  progressHUD.bezelView.backgroundColor=[UIColor grayColor];
  progressHUD.contentColor=[UIColor blueColor];
}


//-(void)showHud
//{
//  UIView *view;
//  self.progressHUD=[MBProgressHUD showHUDAddedTo:view animated:YES];
//  self.progressHUD.mode=MBProgressHUDModeIndeterminate;
//  self.progressHUD.label.text=@"loading";
//  self.progressHUD.bezelView.backgroundColor=[UIColor grayColor];
//  self.progressHUD.contentColor=[UIColor blueColor];
//
//}

-(void)hideHUDInView:(UIView *)view
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [MBProgressHUD hideHUDForView:view animated:YES];
    
  });
}


@end
