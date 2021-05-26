const findMin = (array, index) =>
  array.reduce(
    (prev, curr, currIndex) => {
      if (currIndex !== index && !Number.isNaN(curr)) {
        if (curr < prev.value) {
          return { value: curr, index: currIndex };
        }
      }
      return prev;
    },
    { value: infinity, index: -1 }
  );

let matrix = math.matrix([]);
const validateMatrix = (matrix) => {
  const row = matrix.length;
  const col = matrix[0].length;
  if (row < 3)
    throw new Error("Illegal Argument, matrix size must be at least 3");
  else if (row !== col)
    throw new Error(
      `Illegal Argument, matrix row number(${row}) does not match column number(${col})`
    );
  else {
    matrix.forEach((array, index) => {
      if (!Number.isNaN(array[index])) {
        throw new Error(
          `Illegal Argument at row, column ${index}, matrix must have NaN on diagonal`
        );
      }
    });
  }
};

const getLB = (path, matrix) => {
  let lb = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    const index = path.indexOf(i);
    const row = matrix[i];
    switch (index) {
      case 0: {
        if (path.length === 1) {
          // fall through to case -1
          // minimum
          const m1 = findMin(row, NaN);
          // 2nd minimum
          const m2 = findMin(row, m1.index);
          lb += m1.value + m2.value;
        } else if (path.length === matrix.length) {
          lb += row[path[1]] + row[path[path.length - 1]];
        } else {
          lb += row[path[1]] + findMin(row, path[1]).value;
        }
        break;
      }

      case -1: {
        // minimum
        const m1 = findMin(row, NaN);
        // 2nd minimum
        const m2 = findMin(row, m1.index);
        lb += m1.value + m2.value;
        break;
      }

      case path.length - 1: {
        if (path.length === matrix.length) {
          lb += row[path[path.length - 2]] + row[path[0]];
        } else {
          lb +=
            row[path[path.length - 2]] +
            findMin(row, path[path.length - 2]).value;
        }
        break;
      }
      default: {
        lb += row[path[index - 1]] + row[path[index + 1]];
      }
    }
  }
  return Math.ceil(lb / 2);
};

class Solution {
  constructor(path, matrix) {
    this.path = path;
    this.level = path.length - 1;
    this.lb = getLB(path, matrix);
  }
}

class SolutionSpace {
  constructor(matrix) {
    this.space = new Array(matrix.length);

    this.branch = (solution) => {
      const { path, level } = solution;
      if (level === 0) {
        this.space[0] = [solution];
      }
      if (level < this.space.length - 1) {
        let nextLevel = this.space[level + 1];
        if (nextLevel == null) {
          nextLevel = [];
        }

        for (let i = 0, n = matrix.length; i < n; i += 1) {
          if (path.indexOf(i) === -1) {
            nextLevel.push(new Solution(path.slice().concat(i), matrix));
          }
        }

        nextLevel.sort((s1, s2) => s1.lb - s2.lb);

        this.space[level + 1] = nextLevel;

        this.branch(nextLevel[0]);
      }
    };

    this.prune = (solution) => {
      const { lb, level } = solution;
      for (let i = 0; i < level; i += 1) {
        const currentLevel = this.space[i];
        while (
          currentLevel.length > 0 &&
          currentLevel[currentLevel.length - 1].lb >= lb
        ) {
          currentLevel.pop();
        }
      }
    };
  }
}

const solveTspBB = (matrix) => {
  validateMatrix(matrix);
  let best;
  const ss = new SolutionSpace(matrix);

  ss.branch(new Solution([0], matrix));
  best = ss.space[ss.space.length - 1].pop();
  ss.prune(best);

  // back trace
  for (let i = ss.space.length - 2; i > 0; i -= 1) {
    ss.space[i].shift();
    while (ss.space[i].length > 0) {
      ss.branch(ss.space[i].shift());
      const newSolution = ss.space[ss.space.length - 1].pop();
      if (newSolution.lb < best.lb) {
        best = newSolution;
        ss.prune(best);
      }
    }
  }
  return best;
};

const solveTsp = (matrix) => {
  const best = solveTspBB(matrix);
  best.path.concat(best.path[0]);
  return best;
};
