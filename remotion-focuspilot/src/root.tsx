import {Composition} from 'remotion';
import {FocusPilotAd} from './video';
import {AresPromoReel} from './reel';

export const RemotionRoot = () => (
  <>
    <Composition id="FocusPilotAd" component={FocusPilotAd} durationInFrames={900} fps={30} width={1920} height={1080} />
    <Composition id="AresPromoReel" component={AresPromoReel} durationInFrames={840} fps={30} width={1080} height={1920} />
  </>
);
