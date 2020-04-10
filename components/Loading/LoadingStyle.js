import styled from 'styled-components';

export const Loading = styled.div`
	.loading-overlay {
		bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;
    display: none;
    justify-content: center;
    overflow: hidden;
		&.is-active {
			display: flex;
		}
		&.is-full-page {
			z-index: 11;
			position: fixed;
			.loading-icon {
				&:after {
					top: calc(50% - 2.5em);
					left: calc(50% - 2.5em);
					width: 5em;
					height: 5em;
				}
			}
		}
		.loading-background {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      background: #7f7f7f;
      background: hsla(0,0%,100%,.5);
		}
		.loading-icon {
			position: relative;
			&:after {
        animation: spinAround .5s infinite linear;
        border: 2px solid #dbdbdb;
        border-radius: 290486px;
        border-right-color: transparent;
        border-top-color: transparent;
        content: "";
        display: block;
        height: 1em;
        position: relative;
        width: 1em;
        position: absolute;
        top: calc(50% - 1.5em);
        left: calc(50% - 1.5em);
        width: 3em;
        height: 3em;
        border-width: .25em;
			}
		}

    @keyframes spinAround {
    from {
      transform: rotate(0deg); }
    to {
      transform: rotate(359deg); } 

	}
`;
