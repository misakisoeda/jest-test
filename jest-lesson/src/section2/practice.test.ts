import { ShoppingList } from "./practice"

describe("演習問題", () => {
    let shoppingList: ShoppingList;

    beforeEach(() => {
        shoppingList = new ShoppingList();
    });

    describe("addItem", () => {
        it("1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース", () => {
            shoppingList.addItem("メロン");
            expect(shoppingList.list).toHaveLength(1);  // 配列や文字列のサイズを確認
            expect(shoppingList.list[0]).toBe("メロン");  // 0番目の文字は「メロン」か確認
        })

        it("リストに複数アイテムを追加できる", () => {  // 追加
            shoppingList.addItem("リンゴ");
            shoppingList.addItem("ミカン");
            expect(shoppingList.list).toHaveLength(2);  // 配列や文字列のサイズを確認
            expect(shoppingList.list).toEqual(["リンゴ", "ミカン"]);    // objectを比較するのでtoEqual
        });
    });

    describe("removeItem", () => {
        it("2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース", () => {
            shoppingList.addItem("メロン");
            shoppingList.addItem("リンゴ");
            shoppingList.removeItem("リンゴ");
            expect(shoppingList.list).not.toContain("リンゴ");  // アイテムが配列内にないことを確認
            expect(shoppingList.list).toHaveLength(1);  // 配列や文字列のサイズを確認
            expect(shoppingList.list[0]).toBe("メロン");  // 0番目の文字は「メロン」か確認
        })

        it("3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース", () => {
            // エラーがスローされることを確認
            expect(() => {
                shoppingList.removeItem("リンゴ");
            }).toThrow("アイテム: リンゴ は存在しません");
        })
    });
})
