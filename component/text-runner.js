{
    shop?.colorSettings?.textInfoTopBlock?.length > 0 && 
        <div className="header__top-block-wrap">
            <div className="header__top-block">
                {
                    shop?.colorSettings?.isAnimationTopBlock ? <>
                        <p className="header__top-block-line">{shop?.colorSettings?.textInfoTopBlock}</p>
                        <p className="header__top-block-line">{shop?.colorSettings?.textInfoTopBlock}</p>
                    </> : <div className="header__top-block-line2">{shop?.colorSettings?.textInfoTopBlock}</div>
                }
            </div>
        </div>
}


.header__top-block-wrap {
    overflow: hidden;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    background: var(--bgColorTopBlockHeader);
  }
  
  .header__top-block {
    display: flex;
  }
  
  .header__top-block-line {
    color: var(--colorTopBlockHeader);
    flex-shrink: 0;
    margin: 0;
    padding: 7px 7px;
    min-width: 100%;
    white-space: nowrap;
    animation-name: marqueeLine;
    animation-duration: 6s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    text-align: center;
  }
  
  .header__top-block-line2 {
    color: var(--colorTopBlockHeader);
    flex-shrink: 0;
    margin: 0;
    padding: 7px 7px;
    min-width: 100%;
    white-space: nowrap;
    text-align: center;
  }
  
  @keyframes marqueeLine {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
