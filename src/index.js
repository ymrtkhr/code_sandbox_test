import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (inputText) => {
  // 生成
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  // buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    const moveTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(moveTarget);
    // 完了リストに追加
    const addTarget = completeButton.parentNode.parentNode;
    // TODOの内容テキストを取得
    const text = completeButton.parentNode.firstElementChild.innerText;
    // li要素を初期化
    addTarget.textContent = null;
    // divタグ追加
    const div = document.createElement("div");
    div.className = "list-row";
    // 戻すボタン追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    const p = document.createElement("p");
    p.className = "list-title";
    p.innerText = text;

    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
