//
//  CalendarView.m
//  BakeSaleapp
//
//  Created by Lavanya on 09/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "CalendarView.h"
#import <React/RCTLog.h>

@implementation CalendarView


RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
