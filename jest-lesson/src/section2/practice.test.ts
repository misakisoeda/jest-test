import { ShoppingList } from "./practice"

describe("演習問題", () => {
    let shoppingList: ShoppingList;

    beforeEach(() => {
        shoppingList = new ShoppingList();
    });

    describe("addItem", () => {
        it("1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース", () => {
            shoppingList.addItem("追加テキスト");
            expect(shoppingList.list).toHaveLength(1);  // 配列や文字列のサイズを確認
            expect(shoppingList.list[0]).toBe("追加テキスト");  // 0番目の文字は「ほげ」か確認
        })

        it("既存のリストに新しい項目を追加できる", () => {  // 追加
            shoppingList.addItem("ほげ");
            shoppingList.addItem("ふが");
            expect(shoppingList.list).toHaveLength(2);  // 配列や文字列のサイズを確認
            expect(shoppingList.list).toEqual(["ほげ", "ふが"]);    // objectを比較するのでtoEqual
        });
    });

    describe("removeItem", () => {
        it("2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース", () => {
            shoppingList.addItem("追加テキスト");
            shoppingList.addItem("ほげ");
            shoppingList.removeItem("ほげ");
            expect(shoppingList.list).toHaveLength(1);  // 配列や文字列のサイズを確認
            expect(shoppingList.list[0]).toBe("追加テキスト");  // 0番目の文字は「ほげ」か確認
        })

        it("3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース", () => {
            shoppingList.addItem("追加テキスト");

            // エラーがスローされることを確認
            expect(() => {
                shoppingList.removeItem("ほげ");
            }).toThrow("アイテム: ほげ は存在しません");

            expect(shoppingList.list).toHaveLength(1);  // 配列や文字列のサイズを確認
            expect(shoppingList.list[0]).toBe("追加テキスト");  // 0番目の文字は「ほげ」か確認
        })
    });
})
