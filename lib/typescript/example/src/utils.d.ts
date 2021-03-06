/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ViewStyle } from 'react-native';
export declare const PAGES = 5;
export declare const BGCOLOR: string[];
export declare const IMAGE_URIS: string[];
export declare const thumbsUp = "\uD83D\uDC4D";
export declare const logoUrl = "https://raw.githubusercontent.com/react-native-community/react-native-viewpager/master/docs/viewpager-logo.png";
export declare type CreatePage = {
    key: number;
    style: ViewStyle;
    imgSource: {
        uri: string;
    };
};
export declare const createPage: (key: number) => CreatePage;
