//
//  ProgressView.h
//  BakeSaleapp
//
//  Created by Lavanya on 03/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import <React/RCTEventEmitter.h>
#import "MBProgressHUD.h"


@interface ProgressView : NSObject



-(void)showHud;
-(void)hideHUDInView:(UIView *)view;

@end
