import React, { memo } from 'react'

import { ChevronIcon } from 'src/assets/images'
import { Grid } from '../Grid'
import { StyledGlobalFooter } from './styles'

const GlobalFooter: React.FC = () => {
  return (
    <StyledGlobalFooter>
      <Grid sm={4}>
        <h3 className="globalFooterTitle">
          고객센터
          <ChevronIcon className="chevron" />
        </h3>

        <a href="tel:10041004" className="globalFooterContact">
          1004-1004
        </a>

        <p className="globalFooterTime">
          평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
        </p>

        <dl className="globalFooterDetail">
          <div>
            <dt>상호명</dt>
            <dd>(주)방루이</dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>
              <address>
                <a href="mailto:kbu715@naver.com">kbu715@naver.com</a>
              </address>
              (제휴문의)
            </dd>
          </div>
          <div>
            <dt>대표이사</dt>
            <dd>방루이</dd>
          </div>
          <div>
            <dt>주소</dt>
            <dd>
              <address>
                <a
                  href="https://github.com/kbu715"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/kbu715
                </a>
              </address>
            </dd>
          </div>
        </dl>
      </Grid>
    </StyledGlobalFooter>
  )
}

const MemoGlobalFooter = memo(GlobalFooter)
export { MemoGlobalFooter as GlobalFooter }
