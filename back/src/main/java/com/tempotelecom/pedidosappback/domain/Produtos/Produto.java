package com.tempotelecom.pedidosappback.domain.Produtos;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tempotelecom.pedidosappback.core.Entity.AbstractEntity;
import com.tempotelecom.pedidosappback.domain.Pedidos.Pedido;

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

    @JsonIgnore
    @OneToMany(mappedBy = "produto1", cascade = CascadeType.ALL)
    private List<Pedido> pedidos1;

    @JsonIgnore
    @OneToMany(mappedBy = "produto2", cascade = CascadeType.ALL)
    private List<Pedido> pedidos2;

    @JsonIgnore
    @OneToMany(mappedBy = "produto3", cascade = CascadeType.ALL)
    private List<Pedido> pedidos3;

    @JsonIgnore
    @OneToMany(mappedBy = "produto4", cascade = CascadeType.ALL)
    private List<Pedido> pedidos4;

}
