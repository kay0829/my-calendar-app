import React from "react";

/**
 * 컴포넌트 간 margin을 명확히 표현하기 위한 컴포넌트
 * @param space margin 관련 tailwindcss
 * @returns 마진 크기만큼의 div
 */
function Spacing({ space }: { space: string }) {
    return <div className={`w-0 h-full ${space}`}></div>;
}

export default Spacing;
