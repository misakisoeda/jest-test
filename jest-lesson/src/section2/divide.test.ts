// toThrow 例外処理
import { divide, ZeroDivisorError } from "./divide";

// 例外発生しないのでテストが失敗する expect(received).toThrow()
// it("0で割るとエラーが発生する", () => {
//     expect(() => divide(10, 1)).toThrow();
// })

// ★無名関数でwrapするのが大切
it("0で割るとエラーが発生する", () => {
    // expect(() => divide(10, 0)).toThrow();
    // expect(() => divide(10, 0)).toThrow("0で割ることはできません！");    // エラーメッセージを渡すこともできる。
    expect(() => divide(10, 0)).toThrow(ZeroDivisorError);   // エラーの種類によるテスト
})
