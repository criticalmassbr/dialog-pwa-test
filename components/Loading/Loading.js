import { Loading } from './LoadingStyle';

export default function LoadingComponent() {
  return (
    <Loading>
      <div className="loading-overlay is-active is-full-page">
        <div className="loading-background"></div>
        <div className="loading-icon"></div>
      </div>
    </Loading>
  );
}