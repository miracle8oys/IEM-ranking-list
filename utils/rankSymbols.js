function rankSymbols(rank) {
    if (rank < 1) {
      return rankStatusS(rank)
    }

    if (rank < 2) {
      return rankStatusA(rank)
    }

    if (rank < 3) {
      return rankStatusB(rank)
    }

    if (rank < 4) {
      return rankStatusC(rank)
    }

    if (rank < 5) {
      return rankStatusD(rank)
    }

    if (rank < 6) {
      return 'E'
    }

    if (rank < 7) {
      return 'F'
    }
  }

  function rankStatusS(rank) {
    if (rank < 0.33) {
      return 'S+'
    }

    if (rank < 0.67) {
      return 'S'
    }

    return 'S-'
  }

  function rankStatusA(rank) {
    if (rank < 1.33) {
      return 'A+'
    }

    if (rank < 1.67) {
      return 'A'
    }

    return 'A-'
  }

  function rankStatusB(rank) {
    if (rank < 2.33) {
      return 'B+'
    }

    if (rank < 2.67) {
      return 'B'
    }

    return 'B-'
  }

  function rankStatusC(rank) {
    if (rank < 3.33) {
      return 'C+'
    }

    if (rank < 3.67) {
      return 'C'
    }

    return 'C-'
  }

  function rankStatusD(rank) {
    if (rank < 4.33) {
      return 'D+'
    }

    if (rank < 4.67) {
      return 'D'
    }

    return 'D-'
  }

export default rankSymbols