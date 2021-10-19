package com.tempotelecom.pedidosappback.domain.Produtos;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import com.tempotelecom.pedidosappback.core.Entity.AbstractEntity;

@Entity
@Table(name = "produtos")
@Getter
@Setter
public class Produto extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "nome")
    private String nome;

    @NotNull
    @Column(name = "valor")
    private Double valor;
}
