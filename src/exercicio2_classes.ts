class ConversaoDeUnidadesDeTempo {
  public static converMinutoParaSegundo(valor: number) {
    return `${valor * 60} segundos`;
  }

  public static converHoraParaMinutos(valor: number) {
    return `${valor * 60} minutos`;
  }

  public static converDiaParaHoras(valor: number) {
    return `${valor * 24} horas`;
  }

  public static converSemanaParaDias(valor: number) {
    return `${valor * 7} dias`;
  }

  public static converMesParaDias(valor: number) {
    return `${valor * 30} dias`;
  }

  public static converAnoParaDias(valor: number) {
    return `${valor * 365.25} dias`;
  }
}

console.log(ConversaoDeUnidadesDeTempo.converMinutoParaSegundo(5));
console.log(ConversaoDeUnidadesDeTempo.converHoraParaMinutos(5));
console.log(ConversaoDeUnidadesDeTempo.converDiaParaHoras(5));
console.log(ConversaoDeUnidadesDeTempo.converSemanaParaDias(5));
console.log(ConversaoDeUnidadesDeTempo.converMesParaDias(5));
console.log(ConversaoDeUnidadesDeTempo.converAnoParaDias(5));
