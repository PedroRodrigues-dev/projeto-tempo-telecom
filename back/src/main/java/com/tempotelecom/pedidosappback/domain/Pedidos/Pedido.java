package com.tempotelecom.pedidosappback.domain.Pedidos;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.tempotelecom.pedidosappback.core.Entity.AbstractEntity;
import com.tempotelecom.pedidosappback.domain.Cliente.Cliente;
import com.tempotelecom.pedidosappback.domain.Produtos.Produto;

@Entity
@Table(name = "pedidos")
@Getter
@Setter
public class Pedido extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Cliente cliente;

    @NotNull
    @JoinColumn(name = "produto1_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto1;

    @JoinColumn(name = "produto2_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto2;

    @JoinColumn(name = "produto3_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto3;

    @JoinColumn(name = "produto4_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto4;

    @Column(name = "created_at")
    private String createdAt;

}
